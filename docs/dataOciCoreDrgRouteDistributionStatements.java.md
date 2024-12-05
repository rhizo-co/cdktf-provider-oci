# `dataOciCoreDrgRouteDistributionStatements` Submodule <a name="`dataOciCoreDrgRouteDistributionStatements` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreDrgRouteDistributionStatements <a name="DataOciCoreDrgRouteDistributionStatements" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements oci_core_drg_route_distribution_statements}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_drg_route_distribution_statements.DataOciCoreDrgRouteDistributionStatements;

DataOciCoreDrgRouteDistributionStatements.Builder.create(Construct scope, java.lang.String id)
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
    .drgRouteDistributionId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreDrgRouteDistributionStatementsFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.drgRouteDistributionId">drgRouteDistributionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#drg_route_distribution_id DataOciCoreDrgRouteDistributionStatements#drg_route_distribution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter">DataOciCoreDrgRouteDistributionStatementsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#id DataOciCoreDrgRouteDistributionStatements#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `drgRouteDistributionId`<sup>Required</sup> <a name="drgRouteDistributionId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.drgRouteDistributionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#drg_route_distribution_id DataOciCoreDrgRouteDistributionStatements#drg_route_distribution_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter">DataOciCoreDrgRouteDistributionStatementsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#filter DataOciCoreDrgRouteDistributionStatements#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#id DataOciCoreDrgRouteDistributionStatements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCoreDrgRouteDistributionStatementsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter">DataOciCoreDrgRouteDistributionStatementsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreDrgRouteDistributionStatements resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_drg_route_distribution_statements.DataOciCoreDrgRouteDistributionStatements;

DataOciCoreDrgRouteDistributionStatements.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_drg_route_distribution_statements.DataOciCoreDrgRouteDistributionStatements;

DataOciCoreDrgRouteDistributionStatements.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_drg_route_distribution_statements.DataOciCoreDrgRouteDistributionStatements;

DataOciCoreDrgRouteDistributionStatements.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_drg_route_distribution_statements.DataOciCoreDrgRouteDistributionStatements;

DataOciCoreDrgRouteDistributionStatements.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCoreDrgRouteDistributionStatements.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCoreDrgRouteDistributionStatements resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCoreDrgRouteDistributionStatements to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCoreDrgRouteDistributionStatements that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreDrgRouteDistributionStatements to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.drgRouteDistributionStatements">drgRouteDistributionStatements</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList">DataOciCoreDrgRouteDistributionStatementsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.drgRouteDistributionIdInput">drgRouteDistributionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter">DataOciCoreDrgRouteDistributionStatementsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.drgRouteDistributionId">drgRouteDistributionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `drgRouteDistributionStatements`<sup>Required</sup> <a name="drgRouteDistributionStatements" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.drgRouteDistributionStatements"></a>

```java
public DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList getDrgRouteDistributionStatements();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.filter"></a>

```java
public DataOciCoreDrgRouteDistributionStatementsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList">DataOciCoreDrgRouteDistributionStatementsFilterList</a>

---

##### `drgRouteDistributionIdInput`<sup>Optional</sup> <a name="drgRouteDistributionIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.drgRouteDistributionIdInput"></a>

```java
public java.lang.String getDrgRouteDistributionIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter">DataOciCoreDrgRouteDistributionStatementsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `drgRouteDistributionId`<sup>Required</sup> <a name="drgRouteDistributionId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.drgRouteDistributionId"></a>

```java
public java.lang.String getDrgRouteDistributionId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreDrgRouteDistributionStatementsConfig <a name="DataOciCoreDrgRouteDistributionStatementsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_drg_route_distribution_statements.DataOciCoreDrgRouteDistributionStatementsConfig;

DataOciCoreDrgRouteDistributionStatementsConfig.builder()
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
    .drgRouteDistributionId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreDrgRouteDistributionStatementsFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.drgRouteDistributionId">drgRouteDistributionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#drg_route_distribution_id DataOciCoreDrgRouteDistributionStatements#drg_route_distribution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter">DataOciCoreDrgRouteDistributionStatementsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#id DataOciCoreDrgRouteDistributionStatements#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `drgRouteDistributionId`<sup>Required</sup> <a name="drgRouteDistributionId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.drgRouteDistributionId"></a>

```java
public java.lang.String getDrgRouteDistributionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#drg_route_distribution_id DataOciCoreDrgRouteDistributionStatements#drg_route_distribution_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter">DataOciCoreDrgRouteDistributionStatementsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#filter DataOciCoreDrgRouteDistributionStatements#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#id DataOciCoreDrgRouteDistributionStatements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements <a name="DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_drg_route_distribution_statements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements;

DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements.builder()
    .build();
```


### DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria <a name="DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_drg_route_distribution_statements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria;

DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria.builder()
    .build();
```


### DataOciCoreDrgRouteDistributionStatementsFilter <a name="DataOciCoreDrgRouteDistributionStatementsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_drg_route_distribution_statements.DataOciCoreDrgRouteDistributionStatementsFilter;

DataOciCoreDrgRouteDistributionStatementsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#name DataOciCoreDrgRouteDistributionStatements#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#values DataOciCoreDrgRouteDistributionStatements#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#regex DataOciCoreDrgRouteDistributionStatements#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#name DataOciCoreDrgRouteDistributionStatements#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#values DataOciCoreDrgRouteDistributionStatements#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#regex DataOciCoreDrgRouteDistributionStatements#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList <a name="DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_drg_route_distribution_statements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList;

new DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.get"></a>

```java
public DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList <a name="DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_drg_route_distribution_statements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList;

new DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.get"></a>

```java
public DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference <a name="DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_drg_route_distribution_statements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference;

new DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.attachmentType">attachmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.drgAttachmentId">drgAttachmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.matchType">matchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attachmentType`<sup>Required</sup> <a name="attachmentType" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.attachmentType"></a>

```java
public java.lang.String getAttachmentType();
```

- *Type:* java.lang.String

---

##### `drgAttachmentId`<sup>Required</sup> <a name="drgAttachmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.drgAttachmentId"></a>

```java
public java.lang.String getDrgAttachmentId();
```

- *Type:* java.lang.String

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.matchType"></a>

```java
public java.lang.String getMatchType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.internalValue"></a>

```java
public DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria</a>

---


### DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference <a name="DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_drg_route_distribution_statements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference;

new DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.matchCriteria">matchCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `matchCriteria`<sup>Required</sup> <a name="matchCriteria" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.matchCriteria"></a>

```java
public DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList getMatchCriteria();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList</a>

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.internalValue"></a>

```java
public DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements</a>

---


### DataOciCoreDrgRouteDistributionStatementsFilterList <a name="DataOciCoreDrgRouteDistributionStatementsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_drg_route_distribution_statements.DataOciCoreDrgRouteDistributionStatementsFilterList;

new DataOciCoreDrgRouteDistributionStatementsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.get"></a>

```java
public DataOciCoreDrgRouteDistributionStatementsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter">DataOciCoreDrgRouteDistributionStatementsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter">DataOciCoreDrgRouteDistributionStatementsFilter</a>>

---


### DataOciCoreDrgRouteDistributionStatementsFilterOutputReference <a name="DataOciCoreDrgRouteDistributionStatementsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_drg_route_distribution_statements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference;

new DataOciCoreDrgRouteDistributionStatementsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter">DataOciCoreDrgRouteDistributionStatementsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter">DataOciCoreDrgRouteDistributionStatementsFilter</a>

---



