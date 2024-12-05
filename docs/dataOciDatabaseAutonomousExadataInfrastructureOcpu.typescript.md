# `dataOciDatabaseAutonomousExadataInfrastructureOcpu` Submodule <a name="`dataOciDatabaseAutonomousExadataInfrastructureOcpu` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousExadataInfrastructureOcpu <a name="DataOciDatabaseAutonomousExadataInfrastructureOcpu" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructure_ocpu oci_database_autonomous_exadata_infrastructure_ocpu}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousExadataInfrastructureOcpu } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu(scope: Construct, id: string, config: DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig">DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig">DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousExadataInfrastructureOcpu resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.isConstruct"></a>

```typescript
import { dataOciDatabaseAutonomousExadataInfrastructureOcpu } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.isTerraformElement"></a>

```typescript
import { dataOciDatabaseAutonomousExadataInfrastructureOcpu } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseAutonomousExadataInfrastructureOcpu } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseAutonomousExadataInfrastructureOcpu } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousExadataInfrastructureOcpu resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseAutonomousExadataInfrastructureOcpu to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseAutonomousExadataInfrastructureOcpu that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructure_ocpu#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousExadataInfrastructureOcpu to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.byWorkloadType">byWorkloadType</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList">DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.consumedCpu">consumedCpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.totalCpu">totalCpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.autonomousExadataInfrastructureIdInput">autonomousExadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.autonomousExadataInfrastructureId">autonomousExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `byWorkloadType`<sup>Required</sup> <a name="byWorkloadType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.byWorkloadType"></a>

```typescript
public readonly byWorkloadType: DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList">DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList</a>

---

##### `consumedCpu`<sup>Required</sup> <a name="consumedCpu" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.consumedCpu"></a>

```typescript
public readonly consumedCpu: number;
```

- *Type:* number

---

##### `totalCpu`<sup>Required</sup> <a name="totalCpu" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.totalCpu"></a>

```typescript
public readonly totalCpu: number;
```

- *Type:* number

---

##### `autonomousExadataInfrastructureIdInput`<sup>Optional</sup> <a name="autonomousExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.autonomousExadataInfrastructureIdInput"></a>

```typescript
public readonly autonomousExadataInfrastructureIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `autonomousExadataInfrastructureId`<sup>Required</sup> <a name="autonomousExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.autonomousExadataInfrastructureId"></a>

```typescript
public readonly autonomousExadataInfrastructureId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpu.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadType <a name="DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadType"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadType.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousExadataInfrastructureOcpu } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadType: dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadType = { ... }
```


### DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig <a name="DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousExadataInfrastructureOcpu } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousExadataInfrastructureOcpuConfig: dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig.property.autonomousExadataInfrastructureId">autonomousExadataInfrastructureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructure_ocpu#autonomous_exadata_infrastructure_id DataOciDatabaseAutonomousExadataInfrastructureOcpu#autonomous_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructure_ocpu#id DataOciDatabaseAutonomousExadataInfrastructureOcpu#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autonomousExadataInfrastructureId`<sup>Required</sup> <a name="autonomousExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig.property.autonomousExadataInfrastructureId"></a>

```typescript
public readonly autonomousExadataInfrastructureId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructure_ocpu#autonomous_exadata_infrastructure_id DataOciDatabaseAutonomousExadataInfrastructureOcpu#autonomous_exadata_infrastructure_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructure_ocpu#id DataOciDatabaseAutonomousExadataInfrastructureOcpu#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList <a name="DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousExadataInfrastructureOcpu } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference <a name="DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousExadataInfrastructureOcpu } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.property.adw">adw</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.property.atp">atp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadType">DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adw`<sup>Required</sup> <a name="adw" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.property.adw"></a>

```typescript
public readonly adw: number;
```

- *Type:* number

---

##### `atp`<sup>Required</sup> <a name="atp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.property.atp"></a>

```typescript
public readonly atp: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadType;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureOcpu.DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadType">DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadType</a>

---



