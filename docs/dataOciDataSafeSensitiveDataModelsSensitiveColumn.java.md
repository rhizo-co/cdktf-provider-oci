# `dataOciDataSafeSensitiveDataModelsSensitiveColumn` Submodule <a name="`dataOciDataSafeSensitiveDataModelsSensitiveColumn` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSensitiveDataModelsSensitiveColumn <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column oci_data_safe_sensitive_data_models_sensitive_column}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sensitive_data_models_sensitive_column.DataOciDataSafeSensitiveDataModelsSensitiveColumn;

DataOciDataSafeSensitiveDataModelsSensitiveColumn.Builder.create(Construct scope, java.lang.String id)
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
    .sensitiveColumnKey(java.lang.String)
    .sensitiveDataModelId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.sensitiveColumnKey">sensitiveColumnKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#sensitive_column_key DataOciDataSafeSensitiveDataModelsSensitiveColumn#sensitive_column_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#sensitive_data_model_id DataOciDataSafeSensitiveDataModelsSensitiveColumn#sensitive_data_model_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `sensitiveColumnKey`<sup>Required</sup> <a name="sensitiveColumnKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.sensitiveColumnKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#sensitive_column_key DataOciDataSafeSensitiveDataModelsSensitiveColumn#sensitive_column_key}.

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.sensitiveDataModelId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#sensitive_data_model_id DataOciDataSafeSensitiveDataModelsSensitiveColumn#sensitive_data_model_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModelsSensitiveColumn resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sensitive_data_models_sensitive_column.DataOciDataSafeSensitiveDataModelsSensitiveColumn;

DataOciDataSafeSensitiveDataModelsSensitiveColumn.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sensitive_data_models_sensitive_column.DataOciDataSafeSensitiveDataModelsSensitiveColumn;

DataOciDataSafeSensitiveDataModelsSensitiveColumn.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sensitive_data_models_sensitive_column.DataOciDataSafeSensitiveDataModelsSensitiveColumn;

DataOciDataSafeSensitiveDataModelsSensitiveColumn.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sensitive_data_models_sensitive_column.DataOciDataSafeSensitiveDataModelsSensitiveColumn;

DataOciDataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModelsSensitiveColumn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDataSafeSensitiveDataModelsSensitiveColumn to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDataSafeSensitiveDataModelsSensitiveColumn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSensitiveDataModelsSensitiveColumn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.appDefinedChildColumnKeys">appDefinedChildColumnKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.appName">appName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.columnGroups">columnGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.columnName">columnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.dbDefinedChildColumnKeys">dbDefinedChildColumnKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.estimatedDataValueCount">estimatedDataValueCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.objectType">objectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.parentColumnKeys">parentColumnKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.relationType">relationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sampleDataValues">sampleDataValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveColumnKeyInput">sensitiveColumnKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveDataModelIdInput">sensitiveDataModelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveColumnKey">sensitiveColumnKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `appDefinedChildColumnKeys`<sup>Required</sup> <a name="appDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.appDefinedChildColumnKeys"></a>

```java
public java.util.List<java.lang.String> getAppDefinedChildColumnKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `appName`<sup>Required</sup> <a name="appName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.appName"></a>

```java
public java.lang.String getAppName();
```

- *Type:* java.lang.String

---

##### `columnGroups`<sup>Required</sup> <a name="columnGroups" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.columnGroups"></a>

```java
public java.util.List<java.lang.String> getColumnGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `dbDefinedChildColumnKeys`<sup>Required</sup> <a name="dbDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.dbDefinedChildColumnKeys"></a>

```java
public java.util.List<java.lang.String> getDbDefinedChildColumnKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `estimatedDataValueCount`<sup>Required</sup> <a name="estimatedDataValueCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.estimatedDataValueCount"></a>

```java
public java.lang.String getEstimatedDataValueCount();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

---

##### `parentColumnKeys`<sup>Required</sup> <a name="parentColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.parentColumnKeys"></a>

```java
public java.util.List<java.lang.String> getParentColumnKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `relationType`<sup>Required</sup> <a name="relationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.relationType"></a>

```java
public java.lang.String getRelationType();
```

- *Type:* java.lang.String

---

##### `sampleDataValues`<sup>Required</sup> <a name="sampleDataValues" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sampleDataValues"></a>

```java
public java.util.List<java.lang.String> getSampleDataValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `sensitiveTypeId`<sup>Required</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveTypeId"></a>

```java
public java.lang.String getSensitiveTypeId();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `sensitiveColumnKeyInput`<sup>Optional</sup> <a name="sensitiveColumnKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveColumnKeyInput"></a>

```java
public java.lang.String getSensitiveColumnKeyInput();
```

- *Type:* java.lang.String

---

##### `sensitiveDataModelIdInput`<sup>Optional</sup> <a name="sensitiveDataModelIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveDataModelIdInput"></a>

```java
public java.lang.String getSensitiveDataModelIdInput();
```

- *Type:* java.lang.String

---

##### `sensitiveColumnKey`<sup>Required</sup> <a name="sensitiveColumnKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveColumnKey"></a>

```java
public java.lang.String getSensitiveColumnKey();
```

- *Type:* java.lang.String

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveDataModelId"></a>

```java
public java.lang.String getSensitiveDataModelId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sensitive_data_models_sensitive_column.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig;

DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.builder()
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
    .sensitiveColumnKey(java.lang.String)
    .sensitiveDataModelId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.sensitiveColumnKey">sensitiveColumnKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#sensitive_column_key DataOciDataSafeSensitiveDataModelsSensitiveColumn#sensitive_column_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#sensitive_data_model_id DataOciDataSafeSensitiveDataModelsSensitiveColumn#sensitive_data_model_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `sensitiveColumnKey`<sup>Required</sup> <a name="sensitiveColumnKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.sensitiveColumnKey"></a>

```java
public java.lang.String getSensitiveColumnKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#sensitive_column_key DataOciDataSafeSensitiveDataModelsSensitiveColumn#sensitive_column_key}.

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.sensitiveDataModelId"></a>

```java
public java.lang.String getSensitiveDataModelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#sensitive_data_model_id DataOciDataSafeSensitiveDataModelsSensitiveColumn#sensitive_data_model_id}.

---



