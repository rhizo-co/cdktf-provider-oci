# `dataOciSecurityAttributeSecurityAttribute` Submodule <a name="`dataOciSecurityAttributeSecurityAttribute` Submodule" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciSecurityAttributeSecurityAttribute <a name="DataOciSecurityAttributeSecurityAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute oci_security_attribute_security_attribute}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_security_attribute_security_attribute.DataOciSecurityAttributeSecurityAttribute;

DataOciSecurityAttributeSecurityAttribute.Builder.create(Construct scope, java.lang.String id)
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
    .securityAttributeName(java.lang.String)
    .securityAttributeNamespaceId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.securityAttributeName">securityAttributeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute#security_attribute_name DataOciSecurityAttributeSecurityAttribute#security_attribute_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.securityAttributeNamespaceId">securityAttributeNamespaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute#security_attribute_namespace_id DataOciSecurityAttributeSecurityAttribute#security_attribute_namespace_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `securityAttributeName`<sup>Required</sup> <a name="securityAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.securityAttributeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute#security_attribute_name DataOciSecurityAttributeSecurityAttribute#security_attribute_name}.

---

##### `securityAttributeNamespaceId`<sup>Required</sup> <a name="securityAttributeNamespaceId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.securityAttributeNamespaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute#security_attribute_namespace_id DataOciSecurityAttributeSecurityAttribute#security_attribute_namespace_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciSecurityAttributeSecurityAttribute resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_security_attribute_security_attribute.DataOciSecurityAttributeSecurityAttribute;

DataOciSecurityAttributeSecurityAttribute.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_security_attribute_security_attribute.DataOciSecurityAttributeSecurityAttribute;

DataOciSecurityAttributeSecurityAttribute.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_security_attribute_security_attribute.DataOciSecurityAttributeSecurityAttribute;

DataOciSecurityAttributeSecurityAttribute.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_security_attribute_security_attribute.DataOciSecurityAttributeSecurityAttribute;

DataOciSecurityAttributeSecurityAttribute.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciSecurityAttributeSecurityAttribute.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciSecurityAttributeSecurityAttribute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciSecurityAttributeSecurityAttribute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciSecurityAttributeSecurityAttribute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciSecurityAttributeSecurityAttribute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.isRetired">isRetired</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.securityAttributeNamespaceName">securityAttributeNamespaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.validator">validator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList">DataOciSecurityAttributeSecurityAttributeValidatorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.securityAttributeNameInput">securityAttributeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.securityAttributeNamespaceIdInput">securityAttributeNamespaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.securityAttributeName">securityAttributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.securityAttributeNamespaceId">securityAttributeNamespaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isRetired`<sup>Required</sup> <a name="isRetired" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.isRetired"></a>

```java
public IResolvable getIsRetired();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `securityAttributeNamespaceName`<sup>Required</sup> <a name="securityAttributeNamespaceName" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.securityAttributeNamespaceName"></a>

```java
public java.lang.String getSecurityAttributeNamespaceName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `validator`<sup>Required</sup> <a name="validator" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.validator"></a>

```java
public DataOciSecurityAttributeSecurityAttributeValidatorList getValidator();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList">DataOciSecurityAttributeSecurityAttributeValidatorList</a>

---

##### `securityAttributeNameInput`<sup>Optional</sup> <a name="securityAttributeNameInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.securityAttributeNameInput"></a>

```java
public java.lang.String getSecurityAttributeNameInput();
```

- *Type:* java.lang.String

---

##### `securityAttributeNamespaceIdInput`<sup>Optional</sup> <a name="securityAttributeNamespaceIdInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.securityAttributeNamespaceIdInput"></a>

```java
public java.lang.String getSecurityAttributeNamespaceIdInput();
```

- *Type:* java.lang.String

---

##### `securityAttributeName`<sup>Required</sup> <a name="securityAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.securityAttributeName"></a>

```java
public java.lang.String getSecurityAttributeName();
```

- *Type:* java.lang.String

---

##### `securityAttributeNamespaceId`<sup>Required</sup> <a name="securityAttributeNamespaceId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.securityAttributeNamespaceId"></a>

```java
public java.lang.String getSecurityAttributeNamespaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciSecurityAttributeSecurityAttributeConfig <a name="DataOciSecurityAttributeSecurityAttributeConfig" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_security_attribute_security_attribute.DataOciSecurityAttributeSecurityAttributeConfig;

DataOciSecurityAttributeSecurityAttributeConfig.builder()
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
    .securityAttributeName(java.lang.String)
    .securityAttributeNamespaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.securityAttributeName">securityAttributeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute#security_attribute_name DataOciSecurityAttributeSecurityAttribute#security_attribute_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.securityAttributeNamespaceId">securityAttributeNamespaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute#security_attribute_namespace_id DataOciSecurityAttributeSecurityAttribute#security_attribute_namespace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `securityAttributeName`<sup>Required</sup> <a name="securityAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.securityAttributeName"></a>

```java
public java.lang.String getSecurityAttributeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute#security_attribute_name DataOciSecurityAttributeSecurityAttribute#security_attribute_name}.

---

##### `securityAttributeNamespaceId`<sup>Required</sup> <a name="securityAttributeNamespaceId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.securityAttributeNamespaceId"></a>

```java
public java.lang.String getSecurityAttributeNamespaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute#security_attribute_namespace_id DataOciSecurityAttributeSecurityAttribute#security_attribute_namespace_id}.

---

### DataOciSecurityAttributeSecurityAttributeValidator <a name="DataOciSecurityAttributeSecurityAttributeValidator" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_security_attribute_security_attribute.DataOciSecurityAttributeSecurityAttributeValidator;

DataOciSecurityAttributeSecurityAttributeValidator.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciSecurityAttributeSecurityAttributeValidatorList <a name="DataOciSecurityAttributeSecurityAttributeValidatorList" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_security_attribute_security_attribute.DataOciSecurityAttributeSecurityAttributeValidatorList;

new DataOciSecurityAttributeSecurityAttributeValidatorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.get"></a>

```java
public DataOciSecurityAttributeSecurityAttributeValidatorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciSecurityAttributeSecurityAttributeValidatorOutputReference <a name="DataOciSecurityAttributeSecurityAttributeValidatorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_security_attribute_security_attribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference;

new DataOciSecurityAttributeSecurityAttributeValidatorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.property.validatorType">validatorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidator">DataOciSecurityAttributeSecurityAttributeValidator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `validatorType`<sup>Required</sup> <a name="validatorType" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.property.validatorType"></a>

```java
public java.lang.String getValidatorType();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.property.internalValue"></a>

```java
public DataOciSecurityAttributeSecurityAttributeValidator getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidator">DataOciSecurityAttributeSecurityAttributeValidator</a>

---



