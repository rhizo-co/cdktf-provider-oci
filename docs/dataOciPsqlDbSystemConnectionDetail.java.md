# `dataOciPsqlDbSystemConnectionDetail` Submodule <a name="`dataOciPsqlDbSystemConnectionDetail` Submodule" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciPsqlDbSystemConnectionDetail <a name="DataOciPsqlDbSystemConnectionDetail" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail oci_psql_db_system_connection_detail}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_system_connection_detail.DataOciPsqlDbSystemConnectionDetail;

DataOciPsqlDbSystemConnectionDetail.Builder.create(Construct scope, java.lang.String id)
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
    .dbSystemId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#db_system_id DataOciPsqlDbSystemConnectionDetail#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#id DataOciPsqlDbSystemConnectionDetail#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.dbSystemId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#db_system_id DataOciPsqlDbSystemConnectionDetail#db_system_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#id DataOciPsqlDbSystemConnectionDetail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciPsqlDbSystemConnectionDetail resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_system_connection_detail.DataOciPsqlDbSystemConnectionDetail;

DataOciPsqlDbSystemConnectionDetail.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_system_connection_detail.DataOciPsqlDbSystemConnectionDetail;

DataOciPsqlDbSystemConnectionDetail.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_system_connection_detail.DataOciPsqlDbSystemConnectionDetail;

DataOciPsqlDbSystemConnectionDetail.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_system_connection_detail.DataOciPsqlDbSystemConnectionDetail;

DataOciPsqlDbSystemConnectionDetail.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciPsqlDbSystemConnectionDetail.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciPsqlDbSystemConnectionDetail resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciPsqlDbSystemConnectionDetail to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciPsqlDbSystemConnectionDetail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciPsqlDbSystemConnectionDetail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.caCertificate">caCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.instanceEndpoints">instanceEndpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList">DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.primaryDbEndpoint">primaryDbEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList">DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.caCertificate"></a>

```java
public java.lang.String getCaCertificate();
```

- *Type:* java.lang.String

---

##### `instanceEndpoints`<sup>Required</sup> <a name="instanceEndpoints" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.instanceEndpoints"></a>

```java
public DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList getInstanceEndpoints();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList">DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList</a>

---

##### `primaryDbEndpoint`<sup>Required</sup> <a name="primaryDbEndpoint" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.primaryDbEndpoint"></a>

```java
public DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList getPrimaryDbEndpoint();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList">DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList</a>

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.dbSystemIdInput"></a>

```java
public java.lang.String getDbSystemIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciPsqlDbSystemConnectionDetailConfig <a name="DataOciPsqlDbSystemConnectionDetailConfig" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_system_connection_detail.DataOciPsqlDbSystemConnectionDetailConfig;

DataOciPsqlDbSystemConnectionDetailConfig.builder()
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
    .dbSystemId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#db_system_id DataOciPsqlDbSystemConnectionDetail#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#id DataOciPsqlDbSystemConnectionDetail#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#db_system_id DataOciPsqlDbSystemConnectionDetail#db_system_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#id DataOciPsqlDbSystemConnectionDetail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciPsqlDbSystemConnectionDetailInstanceEndpoints <a name="DataOciPsqlDbSystemConnectionDetailInstanceEndpoints" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_system_connection_detail.DataOciPsqlDbSystemConnectionDetailInstanceEndpoints;

DataOciPsqlDbSystemConnectionDetailInstanceEndpoints.builder()
    .build();
```


### DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint <a name="DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_system_connection_detail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint;

DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint.builder()
    .build();
```


### DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint <a name="DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_system_connection_detail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint;

DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList <a name="DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_system_connection_detail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList;

new DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.get"></a>

```java
public DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference <a name="DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_system_connection_detail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference;

new DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint">DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.internalValue"></a>

```java
public DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint">DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint</a>

---


### DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList <a name="DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_system_connection_detail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList;

new DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.get"></a>

```java
public DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference <a name="DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_system_connection_detail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference;

new DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.dbInstanceId">dbInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.endpoint">endpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList">DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpoints">DataOciPsqlDbSystemConnectionDetailInstanceEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbInstanceId`<sup>Required</sup> <a name="dbInstanceId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.dbInstanceId"></a>

```java
public java.lang.String getDbInstanceId();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.endpoint"></a>

```java
public DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList getEndpoint();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList">DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.internalValue"></a>

```java
public DataOciPsqlDbSystemConnectionDetailInstanceEndpoints getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpoints">DataOciPsqlDbSystemConnectionDetailInstanceEndpoints</a>

---


### DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList <a name="DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_system_connection_detail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList;

new DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.get"></a>

```java
public DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference <a name="DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_db_system_connection_detail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference;

new DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint">DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.internalValue"></a>

```java
public DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint">DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint</a>

---



