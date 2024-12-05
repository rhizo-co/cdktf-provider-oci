# `dataOciIdentityIamWorkRequestErrors` Submodule <a name="`dataOciIdentityIamWorkRequestErrors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityIamWorkRequestErrors <a name="DataOciIdentityIamWorkRequestErrors" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors oci_identity_iam_work_request_errors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_iam_work_request_errors.DataOciIdentityIamWorkRequestErrors;

DataOciIdentityIamWorkRequestErrors.Builder.create(Construct scope, java.lang.String id)
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
    .iamWorkRequestId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciIdentityIamWorkRequestErrorsFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.iamWorkRequestId">iamWorkRequestId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#iam_work_request_id DataOciIdentityIamWorkRequestErrors#iam_work_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter">DataOciIdentityIamWorkRequestErrorsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#id DataOciIdentityIamWorkRequestErrors#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `iamWorkRequestId`<sup>Required</sup> <a name="iamWorkRequestId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.iamWorkRequestId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#iam_work_request_id DataOciIdentityIamWorkRequestErrors#iam_work_request_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter">DataOciIdentityIamWorkRequestErrorsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#filter DataOciIdentityIamWorkRequestErrors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#id DataOciIdentityIamWorkRequestErrors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciIdentityIamWorkRequestErrorsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter">DataOciIdentityIamWorkRequestErrorsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityIamWorkRequestErrors resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_iam_work_request_errors.DataOciIdentityIamWorkRequestErrors;

DataOciIdentityIamWorkRequestErrors.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_iam_work_request_errors.DataOciIdentityIamWorkRequestErrors;

DataOciIdentityIamWorkRequestErrors.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_iam_work_request_errors.DataOciIdentityIamWorkRequestErrors;

DataOciIdentityIamWorkRequestErrors.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_iam_work_request_errors.DataOciIdentityIamWorkRequestErrors;

DataOciIdentityIamWorkRequestErrors.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciIdentityIamWorkRequestErrors.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciIdentityIamWorkRequestErrors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciIdentityIamWorkRequestErrors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciIdentityIamWorkRequestErrors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityIamWorkRequestErrors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList">DataOciIdentityIamWorkRequestErrorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.iamWorkRequestErrors">iamWorkRequestErrors</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList">DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter">DataOciIdentityIamWorkRequestErrorsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.iamWorkRequestIdInput">iamWorkRequestIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.iamWorkRequestId">iamWorkRequestId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.filter"></a>

```java
public DataOciIdentityIamWorkRequestErrorsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList">DataOciIdentityIamWorkRequestErrorsFilterList</a>

---

##### `iamWorkRequestErrors`<sup>Required</sup> <a name="iamWorkRequestErrors" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.iamWorkRequestErrors"></a>

```java
public DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList getIamWorkRequestErrors();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList">DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter">DataOciIdentityIamWorkRequestErrorsFilter</a>>

---

##### `iamWorkRequestIdInput`<sup>Optional</sup> <a name="iamWorkRequestIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.iamWorkRequestIdInput"></a>

```java
public java.lang.String getIamWorkRequestIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `iamWorkRequestId`<sup>Required</sup> <a name="iamWorkRequestId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.iamWorkRequestId"></a>

```java
public java.lang.String getIamWorkRequestId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityIamWorkRequestErrorsConfig <a name="DataOciIdentityIamWorkRequestErrorsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_iam_work_request_errors.DataOciIdentityIamWorkRequestErrorsConfig;

DataOciIdentityIamWorkRequestErrorsConfig.builder()
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
    .iamWorkRequestId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciIdentityIamWorkRequestErrorsFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.iamWorkRequestId">iamWorkRequestId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#iam_work_request_id DataOciIdentityIamWorkRequestErrors#iam_work_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter">DataOciIdentityIamWorkRequestErrorsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#id DataOciIdentityIamWorkRequestErrors#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `iamWorkRequestId`<sup>Required</sup> <a name="iamWorkRequestId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.iamWorkRequestId"></a>

```java
public java.lang.String getIamWorkRequestId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#iam_work_request_id DataOciIdentityIamWorkRequestErrors#iam_work_request_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter">DataOciIdentityIamWorkRequestErrorsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#filter DataOciIdentityIamWorkRequestErrors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#id DataOciIdentityIamWorkRequestErrors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciIdentityIamWorkRequestErrorsFilter <a name="DataOciIdentityIamWorkRequestErrorsFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_iam_work_request_errors.DataOciIdentityIamWorkRequestErrorsFilter;

DataOciIdentityIamWorkRequestErrorsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#name DataOciIdentityIamWorkRequestErrors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#values DataOciIdentityIamWorkRequestErrors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#regex DataOciIdentityIamWorkRequestErrors#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#name DataOciIdentityIamWorkRequestErrors#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#values DataOciIdentityIamWorkRequestErrors#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#regex DataOciIdentityIamWorkRequestErrors#regex}.

---

### DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrors <a name="DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrors" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrors"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_iam_work_request_errors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrors;

DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrors.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityIamWorkRequestErrorsFilterList <a name="DataOciIdentityIamWorkRequestErrorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_iam_work_request_errors.DataOciIdentityIamWorkRequestErrorsFilterList;

new DataOciIdentityIamWorkRequestErrorsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.get"></a>

```java
public DataOciIdentityIamWorkRequestErrorsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter">DataOciIdentityIamWorkRequestErrorsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter">DataOciIdentityIamWorkRequestErrorsFilter</a>>

---


### DataOciIdentityIamWorkRequestErrorsFilterOutputReference <a name="DataOciIdentityIamWorkRequestErrorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_iam_work_request_errors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference;

new DataOciIdentityIamWorkRequestErrorsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter">DataOciIdentityIamWorkRequestErrorsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter">DataOciIdentityIamWorkRequestErrorsFilter</a>

---


### DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList <a name="DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_iam_work_request_errors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList;

new DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.get"></a>

```java
public DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference <a name="DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_iam_work_request_errors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference;

new DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrors">DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrors getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrors">DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrors</a>

---



