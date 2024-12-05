# `dataOciDevopsRepositoryFileLine` Submodule <a name="`dataOciDevopsRepositoryFileLine` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsRepositoryFileLine <a name="DataOciDevopsRepositoryFileLine" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_line oci_devops_repository_file_line}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_file_line.DataOciDevopsRepositoryFileLine;

DataOciDevopsRepositoryFileLine.Builder.create(Construct scope, java.lang.String id)
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
    .filePath(java.lang.String)
    .repositoryId(java.lang.String)
    .revision(java.lang.String)
//  .id(java.lang.String)
//  .startLineNumber(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.filePath">filePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_line#file_path DataOciDevopsRepositoryFileLine#file_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_line#repository_id DataOciDevopsRepositoryFileLine#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.revision">revision</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_line#revision DataOciDevopsRepositoryFileLine#revision}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_line#id DataOciDevopsRepositoryFileLine#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.startLineNumber">startLineNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_line#start_line_number DataOciDevopsRepositoryFileLine#start_line_number}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.filePath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_line#file_path DataOciDevopsRepositoryFileLine#file_path}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.repositoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_line#repository_id DataOciDevopsRepositoryFileLine#repository_id}.

---

##### `revision`<sup>Required</sup> <a name="revision" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.revision"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_line#revision DataOciDevopsRepositoryFileLine#revision}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_line#id DataOciDevopsRepositoryFileLine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `startLineNumber`<sup>Optional</sup> <a name="startLineNumber" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.Initializer.parameter.startLineNumber"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_line#start_line_number DataOciDevopsRepositoryFileLine#start_line_number}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.resetStartLineNumber">resetStartLineNumber</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.resetId"></a>

```java
public void resetId()
```

##### `resetStartLineNumber` <a name="resetStartLineNumber" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.resetStartLineNumber"></a>

```java
public void resetStartLineNumber()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsRepositoryFileLine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_file_line.DataOciDevopsRepositoryFileLine;

DataOciDevopsRepositoryFileLine.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_file_line.DataOciDevopsRepositoryFileLine;

DataOciDevopsRepositoryFileLine.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_file_line.DataOciDevopsRepositoryFileLine;

DataOciDevopsRepositoryFileLine.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_file_line.DataOciDevopsRepositoryFileLine;

DataOciDevopsRepositoryFileLine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDevopsRepositoryFileLine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDevopsRepositoryFileLine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDevopsRepositoryFileLine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDevopsRepositoryFileLine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_line#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsRepositoryFileLine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.lines">lines</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList">DataOciDevopsRepositoryFileLineLinesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.filePathInput">filePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.revisionInput">revisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.startLineNumberInput">startLineNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.filePath">filePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.revision">revision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.startLineNumber">startLineNumber</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `lines`<sup>Required</sup> <a name="lines" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.lines"></a>

```java
public DataOciDevopsRepositoryFileLineLinesList getLines();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList">DataOciDevopsRepositoryFileLineLinesList</a>

---

##### `filePathInput`<sup>Optional</sup> <a name="filePathInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.filePathInput"></a>

```java
public java.lang.String getFilePathInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.repositoryIdInput"></a>

```java
public java.lang.String getRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.revisionInput"></a>

```java
public java.lang.String getRevisionInput();
```

- *Type:* java.lang.String

---

##### `startLineNumberInput`<sup>Optional</sup> <a name="startLineNumberInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.startLineNumberInput"></a>

```java
public java.lang.Number getStartLineNumberInput();
```

- *Type:* java.lang.Number

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.filePath"></a>

```java
public java.lang.String getFilePath();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

##### `revision`<sup>Required</sup> <a name="revision" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

---

##### `startLineNumber`<sup>Required</sup> <a name="startLineNumber" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.startLineNumber"></a>

```java
public java.lang.Number getStartLineNumber();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLine.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsRepositoryFileLineConfig <a name="DataOciDevopsRepositoryFileLineConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_file_line.DataOciDevopsRepositoryFileLineConfig;

DataOciDevopsRepositoryFileLineConfig.builder()
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
    .filePath(java.lang.String)
    .repositoryId(java.lang.String)
    .revision(java.lang.String)
//  .id(java.lang.String)
//  .startLineNumber(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig.property.filePath">filePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_line#file_path DataOciDevopsRepositoryFileLine#file_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_line#repository_id DataOciDevopsRepositoryFileLine#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig.property.revision">revision</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_line#revision DataOciDevopsRepositoryFileLine#revision}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_line#id DataOciDevopsRepositoryFileLine#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig.property.startLineNumber">startLineNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_line#start_line_number DataOciDevopsRepositoryFileLine#start_line_number}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig.property.filePath"></a>

```java
public java.lang.String getFilePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_line#file_path DataOciDevopsRepositoryFileLine#file_path}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_line#repository_id DataOciDevopsRepositoryFileLine#repository_id}.

---

##### `revision`<sup>Required</sup> <a name="revision" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_line#revision DataOciDevopsRepositoryFileLine#revision}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_line#id DataOciDevopsRepositoryFileLine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `startLineNumber`<sup>Optional</sup> <a name="startLineNumber" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineConfig.property.startLineNumber"></a>

```java
public java.lang.Number getStartLineNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_line#start_line_number DataOciDevopsRepositoryFileLine#start_line_number}.

---

### DataOciDevopsRepositoryFileLineLines <a name="DataOciDevopsRepositoryFileLineLines" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLines"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLines.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_file_line.DataOciDevopsRepositoryFileLineLines;

DataOciDevopsRepositoryFileLineLines.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsRepositoryFileLineLinesList <a name="DataOciDevopsRepositoryFileLineLinesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_file_line.DataOciDevopsRepositoryFileLineLinesList;

new DataOciDevopsRepositoryFileLineLinesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList.get"></a>

```java
public DataOciDevopsRepositoryFileLineLinesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsRepositoryFileLineLinesOutputReference <a name="DataOciDevopsRepositoryFileLineLinesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_file_line.DataOciDevopsRepositoryFileLineLinesOutputReference;

new DataOciDevopsRepositoryFileLineLinesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.property.lineContent">lineContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.property.lineNumber">lineNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLines">DataOciDevopsRepositoryFileLineLines</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lineContent`<sup>Required</sup> <a name="lineContent" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.property.lineContent"></a>

```java
public java.lang.String getLineContent();
```

- *Type:* java.lang.String

---

##### `lineNumber`<sup>Required</sup> <a name="lineNumber" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.property.lineNumber"></a>

```java
public java.lang.Number getLineNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLinesOutputReference.property.internalValue"></a>

```java
public DataOciDevopsRepositoryFileLineLines getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileLine.DataOciDevopsRepositoryFileLineLines">DataOciDevopsRepositoryFileLineLines</a>

---



