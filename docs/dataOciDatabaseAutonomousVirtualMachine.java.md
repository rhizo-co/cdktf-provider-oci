# `dataOciDatabaseAutonomousVirtualMachine` Submodule <a name="`dataOciDatabaseAutonomousVirtualMachine` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousVirtualMachine <a name="DataOciDatabaseAutonomousVirtualMachine" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machine oci_database_autonomous_virtual_machine}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_virtual_machine.DataOciDatabaseAutonomousVirtualMachine;

DataOciDatabaseAutonomousVirtualMachine.Builder.create(Construct scope, java.lang.String id)
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
    .autonomousVirtualMachineId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.Initializer.parameter.autonomousVirtualMachineId">autonomousVirtualMachineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machine#autonomous_virtual_machine_id DataOciDatabaseAutonomousVirtualMachine#autonomous_virtual_machine_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machine#id DataOciDatabaseAutonomousVirtualMachine#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autonomousVirtualMachineId`<sup>Required</sup> <a name="autonomousVirtualMachineId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.Initializer.parameter.autonomousVirtualMachineId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machine#autonomous_virtual_machine_id DataOciDatabaseAutonomousVirtualMachine#autonomous_virtual_machine_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machine#id DataOciDatabaseAutonomousVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousVirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_virtual_machine.DataOciDatabaseAutonomousVirtualMachine;

DataOciDatabaseAutonomousVirtualMachine.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_virtual_machine.DataOciDatabaseAutonomousVirtualMachine;

DataOciDatabaseAutonomousVirtualMachine.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_virtual_machine.DataOciDatabaseAutonomousVirtualMachine;

DataOciDatabaseAutonomousVirtualMachine.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_virtual_machine.DataOciDatabaseAutonomousVirtualMachine;

DataOciDatabaseAutonomousVirtualMachine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseAutonomousVirtualMachine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousVirtualMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseAutonomousVirtualMachine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseAutonomousVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.autonomousVmClusterId">autonomousVmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.clientIpAddress">clientIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.dbServerDisplayName">dbServerDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.dbServerId">dbServerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.vmName">vmName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.autonomousVirtualMachineIdInput">autonomousVirtualMachineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.autonomousVirtualMachineId">autonomousVirtualMachineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `autonomousVmClusterId`<sup>Required</sup> <a name="autonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.autonomousVmClusterId"></a>

```java
public java.lang.String getAutonomousVmClusterId();
```

- *Type:* java.lang.String

---

##### `clientIpAddress`<sup>Required</sup> <a name="clientIpAddress" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.clientIpAddress"></a>

```java
public java.lang.String getClientIpAddress();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

---

##### `dbNodeStorageSizeInGbs`<sup>Required</sup> <a name="dbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.dbNodeStorageSizeInGbs"></a>

```java
public java.lang.Number getDbNodeStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `dbServerDisplayName`<sup>Required</sup> <a name="dbServerDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.dbServerDisplayName"></a>

```java
public java.lang.String getDbServerDisplayName();
```

- *Type:* java.lang.String

---

##### `dbServerId`<sup>Required</sup> <a name="dbServerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.dbServerId"></a>

```java
public java.lang.String getDbServerId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `memorySizeInGbs`<sup>Required</sup> <a name="memorySizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.memorySizeInGbs"></a>

```java
public java.lang.Number getMemorySizeInGbs();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `vmName`<sup>Required</sup> <a name="vmName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.vmName"></a>

```java
public java.lang.String getVmName();
```

- *Type:* java.lang.String

---

##### `autonomousVirtualMachineIdInput`<sup>Optional</sup> <a name="autonomousVirtualMachineIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.autonomousVirtualMachineIdInput"></a>

```java
public java.lang.String getAutonomousVirtualMachineIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `autonomousVirtualMachineId`<sup>Required</sup> <a name="autonomousVirtualMachineId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.autonomousVirtualMachineId"></a>

```java
public java.lang.String getAutonomousVirtualMachineId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachine.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousVirtualMachineConfig <a name="DataOciDatabaseAutonomousVirtualMachineConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_virtual_machine.DataOciDatabaseAutonomousVirtualMachineConfig;

DataOciDatabaseAutonomousVirtualMachineConfig.builder()
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
    .autonomousVirtualMachineId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachineConfig.property.autonomousVirtualMachineId">autonomousVirtualMachineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machine#autonomous_virtual_machine_id DataOciDatabaseAutonomousVirtualMachine#autonomous_virtual_machine_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machine#id DataOciDatabaseAutonomousVirtualMachine#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autonomousVirtualMachineId`<sup>Required</sup> <a name="autonomousVirtualMachineId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachineConfig.property.autonomousVirtualMachineId"></a>

```java
public java.lang.String getAutonomousVirtualMachineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machine#autonomous_virtual_machine_id DataOciDatabaseAutonomousVirtualMachine#autonomous_virtual_machine_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachine.DataOciDatabaseAutonomousVirtualMachineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machine#id DataOciDatabaseAutonomousVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---


