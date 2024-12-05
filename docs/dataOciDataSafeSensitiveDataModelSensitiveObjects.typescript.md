# `dataOciDataSafeSensitiveDataModelSensitiveObjects` Submodule <a name="`dataOciDataSafeSensitiveDataModelSensitiveObjects` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSensitiveDataModelSensitiveObjects <a name="DataOciDataSafeSensitiveDataModelSensitiveObjects" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_objects oci_data_safe_sensitive_data_model_sensitive_objects}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveObjects } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects(scope: Construct, id: string, config: DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig">DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig">DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.resetObject">resetObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.resetObjectType">resetObjectType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter">DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.resetId"></a>

```typescript
public resetId(): void
```

##### `resetObject` <a name="resetObject" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.resetObject"></a>

```typescript
public resetObject(): void
```

##### `resetObjectType` <a name="resetObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.resetObjectType"></a>

```typescript
public resetObjectType(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModelSensitiveObjects resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.isConstruct"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveObjects } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.isTerraformElement"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveObjects } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveObjects } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveObjects } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModelSensitiveObjects resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSensitiveDataModelSensitiveObjects to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSensitiveDataModelSensitiveObjects that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_objects#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSensitiveDataModelSensitiveObjects to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList">DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.sensitiveObjectCollection">sensitiveObjectCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList">DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter">DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.objectInput">objectInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.objectTypeInput">objectTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.schemaNameInput">schemaNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.sensitiveDataModelIdInput">sensitiveDataModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.object">object</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.objectType">objectType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.schemaName">schemaName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList">DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList</a>

---

##### `sensitiveObjectCollection`<sup>Required</sup> <a name="sensitiveObjectCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.sensitiveObjectCollection"></a>

```typescript
public readonly sensitiveObjectCollection: DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList">DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter">DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.objectInput"></a>

```typescript
public readonly objectInput: string[];
```

- *Type:* string[]

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.objectTypeInput"></a>

```typescript
public readonly objectTypeInput: string[];
```

- *Type:* string[]

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string[];
```

- *Type:* string[]

---

##### `sensitiveDataModelIdInput`<sup>Optional</sup> <a name="sensitiveDataModelIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.sensitiveDataModelIdInput"></a>

```typescript
public readonly sensitiveDataModelIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.object"></a>

```typescript
public readonly object: string[];
```

- *Type:* string[]

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.objectType"></a>

```typescript
public readonly objectType: string[];
```

- *Type:* string[]

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.schemaName"></a>

```typescript
public readonly schemaName: string[];
```

- *Type:* string[]

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjects.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig <a name="DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveObjects } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSensitiveDataModelSensitiveObjectsConfig: dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_objects#sensitive_data_model_id DataOciDataSafeSensitiveDataModelSensitiveObjects#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter">DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_objects#id DataOciDataSafeSensitiveDataModelSensitiveObjects#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.object">object</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_objects#object DataOciDataSafeSensitiveDataModelSensitiveObjects#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.objectType">objectType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_objects#object_type DataOciDataSafeSensitiveDataModelSensitiveObjects#object_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.schemaName">schemaName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_objects#schema_name DataOciDataSafeSensitiveDataModelSensitiveObjects#schema_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_objects#sensitive_data_model_id DataOciDataSafeSensitiveDataModelSensitiveObjects#sensitive_data_model_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter">DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_objects#filter DataOciDataSafeSensitiveDataModelSensitiveObjects#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_objects#id DataOciDataSafeSensitiveDataModelSensitiveObjects#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.object"></a>

```typescript
public readonly object: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_objects#object DataOciDataSafeSensitiveDataModelSensitiveObjects#object}.

---

##### `objectType`<sup>Optional</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.objectType"></a>

```typescript
public readonly objectType: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_objects#object_type DataOciDataSafeSensitiveDataModelSensitiveObjects#object_type}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_objects#schema_name DataOciDataSafeSensitiveDataModelSensitiveObjects#schema_name}.

---

### DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter <a name="DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveObjects } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSensitiveDataModelSensitiveObjectsFilter: dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_objects#name DataOciDataSafeSensitiveDataModelSensitiveObjects#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_objects#values DataOciDataSafeSensitiveDataModelSensitiveObjects#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_objects#regex DataOciDataSafeSensitiveDataModelSensitiveObjects#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_objects#name DataOciDataSafeSensitiveDataModelSensitiveObjects#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_objects#values DataOciDataSafeSensitiveDataModelSensitiveObjects#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_objects#regex DataOciDataSafeSensitiveDataModelSensitiveObjects#regex}.

---

### DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollection <a name="DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollection.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveObjects } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollection: dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollection = { ... }
```


### DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItems <a name="DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveObjects } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItems: dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList <a name="DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveObjects } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter">DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter">DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter</a>[]

---


### DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference <a name="DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveObjects } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter">DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter">DataOciDataSafeSensitiveDataModelSensitiveObjectsFilter</a>

---


### DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList <a name="DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveObjects } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference <a name="DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveObjects } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItems">DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItems">DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItems</a>

---


### DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList <a name="DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveObjects } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference <a name="DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveObjects } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList">DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollection">DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList">DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveObjects.DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollection">DataOciDataSafeSensitiveDataModelSensitiveObjectsSensitiveObjectCollection</a>

---



