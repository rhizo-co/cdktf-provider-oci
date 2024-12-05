# `dataOciDataSafeSensitiveDataModelSensitiveTypes` Submodule <a name="`dataOciDataSafeSensitiveDataModelSensitiveTypes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSensitiveDataModelSensitiveTypes <a name="DataOciDataSafeSensitiveDataModelSensitiveTypes" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_types oci_data_safe_sensitive_data_model_sensitive_types}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveTypes } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes(scope: Construct, id: string, config: DataOciDataSafeSensitiveDataModelSensitiveTypesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig">DataOciDataSafeSensitiveDataModelSensitiveTypesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig">DataOciDataSafeSensitiveDataModelSensitiveTypesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.resetSensitiveTypeId">resetSensitiveTypeId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeSensitiveDataModelSensitiveTypesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilter">DataOciDataSafeSensitiveDataModelSensitiveTypesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSensitiveTypeId` <a name="resetSensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.resetSensitiveTypeId"></a>

```typescript
public resetSensitiveTypeId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModelSensitiveTypes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.isConstruct"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveTypes } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.isTerraformElement"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveTypes } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveTypes } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveTypes } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModelSensitiveTypes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSensitiveDataModelSensitiveTypes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSensitiveDataModelSensitiveTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSensitiveDataModelSensitiveTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList">DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.sensitiveDataModelSensitiveTypeCollection">sensitiveDataModelSensitiveTypeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList">DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilter">DataOciDataSafeSensitiveDataModelSensitiveTypesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.sensitiveDataModelIdInput">sensitiveDataModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.sensitiveTypeIdInput">sensitiveTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList">DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList</a>

---

##### `sensitiveDataModelSensitiveTypeCollection`<sup>Required</sup> <a name="sensitiveDataModelSensitiveTypeCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.sensitiveDataModelSensitiveTypeCollection"></a>

```typescript
public readonly sensitiveDataModelSensitiveTypeCollection: DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList">DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeSensitiveDataModelSensitiveTypesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilter">DataOciDataSafeSensitiveDataModelSensitiveTypesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `sensitiveDataModelIdInput`<sup>Optional</sup> <a name="sensitiveDataModelIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.sensitiveDataModelIdInput"></a>

```typescript
public readonly sensitiveDataModelIdInput: string;
```

- *Type:* string

---

##### `sensitiveTypeIdInput`<sup>Optional</sup> <a name="sensitiveTypeIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.sensitiveTypeIdInput"></a>

```typescript
public readonly sensitiveTypeIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

---

##### `sensitiveTypeId`<sup>Required</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.sensitiveTypeId"></a>

```typescript
public readonly sensitiveTypeId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSensitiveDataModelSensitiveTypesConfig <a name="DataOciDataSafeSensitiveDataModelSensitiveTypesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveTypes } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSensitiveDataModelSensitiveTypesConfig: dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_types#sensitive_data_model_id DataOciDataSafeSensitiveDataModelSensitiveTypes#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilter">DataOciDataSafeSensitiveDataModelSensitiveTypesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_types#id DataOciDataSafeSensitiveDataModelSensitiveTypes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_types#sensitive_type_id DataOciDataSafeSensitiveDataModelSensitiveTypes#sensitive_type_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_types#sensitive_data_model_id DataOciDataSafeSensitiveDataModelSensitiveTypes#sensitive_data_model_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeSensitiveDataModelSensitiveTypesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilter">DataOciDataSafeSensitiveDataModelSensitiveTypesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_types#filter DataOciDataSafeSensitiveDataModelSensitiveTypes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_types#id DataOciDataSafeSensitiveDataModelSensitiveTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sensitiveTypeId`<sup>Optional</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesConfig.property.sensitiveTypeId"></a>

```typescript
public readonly sensitiveTypeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_types#sensitive_type_id DataOciDataSafeSensitiveDataModelSensitiveTypes#sensitive_type_id}.

---

### DataOciDataSafeSensitiveDataModelSensitiveTypesFilter <a name="DataOciDataSafeSensitiveDataModelSensitiveTypesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilter.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveTypes } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSensitiveDataModelSensitiveTypesFilter: dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_types#name DataOciDataSafeSensitiveDataModelSensitiveTypes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_types#values DataOciDataSafeSensitiveDataModelSensitiveTypes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_types#regex DataOciDataSafeSensitiveDataModelSensitiveTypes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_types#name DataOciDataSafeSensitiveDataModelSensitiveTypes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_types#values DataOciDataSafeSensitiveDataModelSensitiveTypes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_types#regex DataOciDataSafeSensitiveDataModelSensitiveTypes#regex}.

---

### DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollection <a name="DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollection.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveTypes } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollection: dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollection = { ... }
```


### DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItems <a name="DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveTypes } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItems: dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList <a name="DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveTypes } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilter">DataOciDataSafeSensitiveDataModelSensitiveTypesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSensitiveDataModelSensitiveTypesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilter">DataOciDataSafeSensitiveDataModelSensitiveTypesFilter</a>[]

---


### DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference <a name="DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveTypes } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilter">DataOciDataSafeSensitiveDataModelSensitiveTypesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSensitiveDataModelSensitiveTypesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesFilter">DataOciDataSafeSensitiveDataModelSensitiveTypesFilter</a>

---


### DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList <a name="DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveTypes } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference <a name="DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveTypes } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.property.sensitiveDataModelSensitiveTypeCount">sensitiveDataModelSensitiveTypeCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItems">DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sensitiveDataModelSensitiveTypeCount`<sup>Required</sup> <a name="sensitiveDataModelSensitiveTypeCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.property.sensitiveDataModelSensitiveTypeCount"></a>

```typescript
public readonly sensitiveDataModelSensitiveTypeCount: string;
```

- *Type:* string

---

##### `sensitiveTypeId`<sup>Required</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.property.sensitiveTypeId"></a>

```typescript
public readonly sensitiveTypeId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItems">DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItems</a>

---


### DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList <a name="DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveTypes } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference <a name="DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveTypes } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList">DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollection">DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList">DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveTypes.DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollection">DataOciDataSafeSensitiveDataModelSensitiveTypesSensitiveDataModelSensitiveTypeCollection</a>

---



