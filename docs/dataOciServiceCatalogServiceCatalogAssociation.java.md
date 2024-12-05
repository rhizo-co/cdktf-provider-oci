# `dataOciServiceCatalogServiceCatalogAssociation` Submodule <a name="`dataOciServiceCatalogServiceCatalogAssociation` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceCatalogServiceCatalogAssociation <a name="DataOciServiceCatalogServiceCatalogAssociation" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_association oci_service_catalog_service_catalog_association}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_service_catalog_association.DataOciServiceCatalogServiceCatalogAssociation;

DataOciServiceCatalogServiceCatalogAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .serviceCatalogAssociationId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.serviceCatalogAssociationId">serviceCatalogAssociationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_association#service_catalog_association_id DataOciServiceCatalogServiceCatalogAssociation#service_catalog_association_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `serviceCatalogAssociationId`<sup>Required</sup> <a name="serviceCatalogAssociationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.serviceCatalogAssociationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_association#service_catalog_association_id DataOciServiceCatalogServiceCatalogAssociation#service_catalog_association_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceCatalogServiceCatalogAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_service_catalog_association.DataOciServiceCatalogServiceCatalogAssociation;

DataOciServiceCatalogServiceCatalogAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_service_catalog_association.DataOciServiceCatalogServiceCatalogAssociation;

DataOciServiceCatalogServiceCatalogAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_service_catalog_association.DataOciServiceCatalogServiceCatalogAssociation;

DataOciServiceCatalogServiceCatalogAssociation.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_service_catalog_association.DataOciServiceCatalogServiceCatalogAssociation;

DataOciServiceCatalogServiceCatalogAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciServiceCatalogServiceCatalogAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciServiceCatalogServiceCatalogAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciServiceCatalogServiceCatalogAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciServiceCatalogServiceCatalogAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceCatalogServiceCatalogAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.entityId">entityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.serviceCatalogId">serviceCatalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.serviceCatalogAssociationIdInput">serviceCatalogAssociationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.serviceCatalogAssociationId">serviceCatalogAssociationId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `serviceCatalogId`<sup>Required</sup> <a name="serviceCatalogId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.serviceCatalogId"></a>

```java
public java.lang.String getServiceCatalogId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `serviceCatalogAssociationIdInput`<sup>Optional</sup> <a name="serviceCatalogAssociationIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.serviceCatalogAssociationIdInput"></a>

```java
public java.lang.String getServiceCatalogAssociationIdInput();
```

- *Type:* java.lang.String

---

##### `serviceCatalogAssociationId`<sup>Required</sup> <a name="serviceCatalogAssociationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.serviceCatalogAssociationId"></a>

```java
public java.lang.String getServiceCatalogAssociationId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceCatalogServiceCatalogAssociationConfig <a name="DataOciServiceCatalogServiceCatalogAssociationConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_service_catalog_association.DataOciServiceCatalogServiceCatalogAssociationConfig;

DataOciServiceCatalogServiceCatalogAssociationConfig.builder()
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
    .serviceCatalogAssociationId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.serviceCatalogAssociationId">serviceCatalogAssociationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_association#service_catalog_association_id DataOciServiceCatalogServiceCatalogAssociation#service_catalog_association_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `serviceCatalogAssociationId`<sup>Required</sup> <a name="serviceCatalogAssociationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.serviceCatalogAssociationId"></a>

```java
public java.lang.String getServiceCatalogAssociationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_association#service_catalog_association_id DataOciServiceCatalogServiceCatalogAssociation#service_catalog_association_id}.

---



