# `dataOciPsqlDbSystems` Submodule <a name="`dataOciPsqlDbSystems` Submodule" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciPsqlDbSystems <a name="DataOciPsqlDbSystems" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems oci_psql_db_systems}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystems;

DataOciPsqlDbSystems.Builder.create(Construct scope, java.lang.String id)
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
//  .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciPsqlDbSystemsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#compartment_id DataOciPsqlDbSystems#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#display_name DataOciPsqlDbSystems#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#id DataOciPsqlDbSystems#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#state DataOciPsqlDbSystems#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#compartment_id DataOciPsqlDbSystems#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#display_name DataOciPsqlDbSystems#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#filter DataOciPsqlDbSystems#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#id DataOciPsqlDbSystems#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#state DataOciPsqlDbSystems#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciPsqlDbSystemsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciPsqlDbSystems resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystems;

DataOciPsqlDbSystems.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystems;

DataOciPsqlDbSystems.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystems;

DataOciPsqlDbSystems.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystems;

DataOciPsqlDbSystems.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciPsqlDbSystems.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciPsqlDbSystems resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciPsqlDbSystems to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciPsqlDbSystems that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciPsqlDbSystems to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.dbSystemCollection">dbSystemCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList">DataOciPsqlDbSystemsDbSystemCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList">DataOciPsqlDbSystemsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `dbSystemCollection`<sup>Required</sup> <a name="dbSystemCollection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.dbSystemCollection"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionList getDbSystemCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList">DataOciPsqlDbSystemsDbSystemCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.filter"></a>

```java
public DataOciPsqlDbSystemsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList">DataOciPsqlDbSystemsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciPsqlDbSystemsConfig <a name="DataOciPsqlDbSystemsConfig" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsConfig;

DataOciPsqlDbSystemsConfig.builder()
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
//  .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciPsqlDbSystemsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#compartment_id DataOciPsqlDbSystems#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#display_name DataOciPsqlDbSystems#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#id DataOciPsqlDbSystems#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#state DataOciPsqlDbSystems#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#compartment_id DataOciPsqlDbSystems#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#display_name DataOciPsqlDbSystems#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#filter DataOciPsqlDbSystems#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#id DataOciPsqlDbSystems#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#state DataOciPsqlDbSystems#state}.

---

### DataOciPsqlDbSystemsDbSystemCollection <a name="DataOciPsqlDbSystemsDbSystemCollection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollection;

DataOciPsqlDbSystemsDbSystemCollection.builder()
    .build();
```


### DataOciPsqlDbSystemsDbSystemCollectionItems <a name="DataOciPsqlDbSystemsDbSystemCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItems;

DataOciPsqlDbSystemsDbSystemCollectionItems.builder()
    .build();
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials;

DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials.builder()
    .build();
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails;

DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails.builder()
    .build();
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsInstances <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsInstances" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstances.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstances;

DataOciPsqlDbSystemsDbSystemCollectionItemsInstances.builder()
    .build();
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails;

DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails.builder()
    .build();
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy;

DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy.builder()
    .build();
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy;

DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy.builder()
    .build();
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails;

DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails.builder()
    .build();
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations;

DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations.builder()
    .build();
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsSource <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsSource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsSource;

DataOciPsqlDbSystemsDbSystemCollectionItemsSource.builder()
    .build();
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails;

DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails.builder()
    .build();
```


### DataOciPsqlDbSystemsFilter <a name="DataOciPsqlDbSystemsFilter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsFilter;

DataOciPsqlDbSystemsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#name DataOciPsqlDbSystems#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#values DataOciPsqlDbSystems#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#regex DataOciPsqlDbSystems#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#name DataOciPsqlDbSystems#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#values DataOciPsqlDbSystems#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#regex DataOciPsqlDbSystems#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList;

new DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.get"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference;

new DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.passwordDetails">passwordDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordDetails`<sup>Required</sup> <a name="passwordDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.passwordDetails"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList getPasswordDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList</a>

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.internalValue"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList;

new DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.get"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference;

new DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.passwordType">passwordType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.secretVersion">secretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `passwordType`<sup>Required</sup> <a name="passwordType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.passwordType"></a>

```java
public java.lang.String getPasswordType();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.secretVersion"></a>

```java
public java.lang.String getSecretVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.internalValue"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList;

new DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.get"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference;

new DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.internalValue"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList;

new DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.get"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference;

new DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstances">DataOciPsqlDbSystemsDbSystemCollectionItemsInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.internalValue"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsInstances getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstances">DataOciPsqlDbSystemsDbSystemCollectionItemsInstances</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsList;

new DataOciPsqlDbSystemsDbSystemCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.get"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList;

new DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.get"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference;

new DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.backupStart">backupStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonth">daysOfTheMonth</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeek">daysOfTheWeek</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupStart`<sup>Required</sup> <a name="backupStart" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.backupStart"></a>

```java
public java.lang.String getBackupStart();
```

- *Type:* java.lang.String

---

##### `daysOfTheMonth`<sup>Required</sup> <a name="daysOfTheMonth" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonth"></a>

```java
public java.util.List<java.lang.Number> getDaysOfTheMonth();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `daysOfTheWeek`<sup>Required</sup> <a name="daysOfTheWeek" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfTheWeek();
```

- *Type:* java.util.List<java.lang.String>

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.internalValue"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList;

new DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.get"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference;

new DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.backupPolicy">backupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.maintenanceWindowStart">maintenanceWindowStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupPolicy`<sup>Required</sup> <a name="backupPolicy" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.backupPolicy"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList getBackupPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList</a>

---

##### `maintenanceWindowStart`<sup>Required</sup> <a name="maintenanceWindowStart" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.maintenanceWindowStart"></a>

```java
public java.lang.String getMaintenanceWindowStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.internalValue"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList;

new DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.get"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference;

new DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIp">primaryDbEndpointPrivateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `primaryDbEndpointPrivateIp`<sup>Required</sup> <a name="primaryDbEndpointPrivateIp" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIp"></a>

```java
public java.lang.String getPrimaryDbEndpointPrivateIp();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.internalValue"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference;

new DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.applyConfig">applyConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.configId">configId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instanceMemorySizeInGbs">instanceMemorySizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instanceOcpuCount">instanceOcpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instances">instances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList">DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instancesDetails">instancesDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.managementPolicy">managementPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.networkDetails">networkDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.patchOperations">patchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList">DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList">DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.storageDetails">storageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.systemType">systemType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItems">DataOciPsqlDbSystemsDbSystemCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

---

##### `applyConfig`<sup>Required</sup> <a name="applyConfig" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.applyConfig"></a>

```java
public java.lang.String getApplyConfig();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `configId`<sup>Required</sup> <a name="configId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.configId"></a>

```java
public java.lang.String getConfigId();
```

- *Type:* java.lang.String

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.credentials"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList getCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList</a>

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `instanceMemorySizeInGbs`<sup>Required</sup> <a name="instanceMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instanceMemorySizeInGbs"></a>

```java
public java.lang.Number getInstanceMemorySizeInGbs();
```

- *Type:* java.lang.Number

---

##### `instanceOcpuCount`<sup>Required</sup> <a name="instanceOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instanceOcpuCount"></a>

```java
public java.lang.Number getInstanceOcpuCount();
```

- *Type:* java.lang.Number

---

##### `instances`<sup>Required</sup> <a name="instances" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instances"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList getInstances();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList">DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList</a>

---

##### `instancesDetails`<sup>Required</sup> <a name="instancesDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instancesDetails"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList getInstancesDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `managementPolicy`<sup>Required</sup> <a name="managementPolicy" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.managementPolicy"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList getManagementPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList</a>

---

##### `networkDetails`<sup>Required</sup> <a name="networkDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.networkDetails"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList getNetworkDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList</a>

---

##### `patchOperations`<sup>Required</sup> <a name="patchOperations" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.patchOperations"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList getPatchOperations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList">DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList</a>

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.source"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList getSource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList">DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `storageDetails`<sup>Required</sup> <a name="storageDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.storageDetails"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList getStorageDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `systemType`<sup>Required</sup> <a name="systemType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.systemType"></a>

```java
public java.lang.String getSystemType();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItems">DataOciPsqlDbSystemsDbSystemCollectionItems</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList;

new DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.get"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference;

new DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.operation">operation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.position">position</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.selectedItem">selectedItem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.selection">selection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.value">value</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations">DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.position"></a>

```java
public java.lang.String getPosition();
```

- *Type:* java.lang.String

---

##### `selectedItem`<sup>Required</sup> <a name="selectedItem" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.selectedItem"></a>

```java
public java.lang.String getSelectedItem();
```

- *Type:* java.lang.String

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.selection"></a>

```java
public java.lang.String getSelection();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.value"></a>

```java
public StringMap getValue();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.internalValue"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations">DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList;

new DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.get"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference;

new DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.backupId">backupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.isHavingRestoreConfigOverrides">isHavingRestoreConfigOverrides</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSource">DataOciPsqlDbSystemsDbSystemCollectionItemsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.backupId"></a>

```java
public java.lang.String getBackupId();
```

- *Type:* java.lang.String

---

##### `isHavingRestoreConfigOverrides`<sup>Required</sup> <a name="isHavingRestoreConfigOverrides" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.isHavingRestoreConfigOverrides"></a>

```java
public IResolvable getIsHavingRestoreConfigOverrides();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.internalValue"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsSource getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSource">DataOciPsqlDbSystemsDbSystemCollectionItemsSource</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList;

new DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.get"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference;

new DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.iops">iops</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.isRegionallyDurable">isRegionallyDurable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.systemType">systemType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `iops`<sup>Required</sup> <a name="iops" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.iops"></a>

```java
public java.lang.String getIops();
```

- *Type:* java.lang.String

---

##### `isRegionallyDurable`<sup>Required</sup> <a name="isRegionallyDurable" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.isRegionallyDurable"></a>

```java
public IResolvable getIsRegionallyDurable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `systemType`<sup>Required</sup> <a name="systemType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.systemType"></a>

```java
public java.lang.String getSystemType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.internalValue"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionList <a name="DataOciPsqlDbSystemsDbSystemCollectionList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionList;

new DataOciPsqlDbSystemsDbSystemCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.get"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciPsqlDbSystemsDbSystemCollectionOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference;

new DataOciPsqlDbSystemsDbSystemCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList">DataOciPsqlDbSystemsDbSystemCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollection">DataOciPsqlDbSystemsDbSystemCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.items"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList">DataOciPsqlDbSystemsDbSystemCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.internalValue"></a>

```java
public DataOciPsqlDbSystemsDbSystemCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollection">DataOciPsqlDbSystemsDbSystemCollection</a>

---


### DataOciPsqlDbSystemsFilterList <a name="DataOciPsqlDbSystemsFilterList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsFilterList;

new DataOciPsqlDbSystemsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.get"></a>

```java
public DataOciPsqlDbSystemsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>>

---


### DataOciPsqlDbSystemsFilterOutputReference <a name="DataOciPsqlDbSystemsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_systems.DataOciPsqlDbSystemsFilterOutputReference;

new DataOciPsqlDbSystemsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>

---



