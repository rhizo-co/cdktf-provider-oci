# `dataOciVnMonitoringPathAnalyzerTests` Submodule <a name="`dataOciVnMonitoringPathAnalyzerTests` Submodule" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciVnMonitoringPathAnalyzerTests <a name="DataOciVnMonitoringPathAnalyzerTests" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests oci_vn_monitoring_path_analyzer_tests}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

new dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests(scope: Construct, id: string, config: DataOciVnMonitoringPathAnalyzerTestsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig">DataOciVnMonitoringPathAnalyzerTestsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig">DataOciVnMonitoringPathAnalyzerTestsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciVnMonitoringPathAnalyzerTestsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter">DataOciVnMonitoringPathAnalyzerTestsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciVnMonitoringPathAnalyzerTests resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isConstruct"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformElement"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformDataSource"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generateConfigForImport"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciVnMonitoringPathAnalyzerTests resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciVnMonitoringPathAnalyzerTests to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciVnMonitoringPathAnalyzerTests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciVnMonitoringPathAnalyzerTests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList">DataOciVnMonitoringPathAnalyzerTestsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.pathAnalyzerTestCollection">pathAnalyzerTestCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter">DataOciVnMonitoringPathAnalyzerTestsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.filter"></a>

```typescript
public readonly filter: DataOciVnMonitoringPathAnalyzerTestsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList">DataOciVnMonitoringPathAnalyzerTestsFilterList</a>

---

##### `pathAnalyzerTestCollection`<sup>Required</sup> <a name="pathAnalyzerTestCollection" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.pathAnalyzerTestCollection"></a>

```typescript
public readonly pathAnalyzerTestCollection: DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciVnMonitoringPathAnalyzerTestsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter">DataOciVnMonitoringPathAnalyzerTestsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciVnMonitoringPathAnalyzerTestsConfig <a name="DataOciVnMonitoringPathAnalyzerTestsConfig" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.Initializer"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

const dataOciVnMonitoringPathAnalyzerTestsConfig: dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#compartment_id DataOciVnMonitoringPathAnalyzerTests#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#display_name DataOciVnMonitoringPathAnalyzerTests#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter">DataOciVnMonitoringPathAnalyzerTestsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#id DataOciVnMonitoringPathAnalyzerTests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#state DataOciVnMonitoringPathAnalyzerTests#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#compartment_id DataOciVnMonitoringPathAnalyzerTests#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#display_name DataOciVnMonitoringPathAnalyzerTests#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciVnMonitoringPathAnalyzerTestsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter">DataOciVnMonitoringPathAnalyzerTestsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#filter DataOciVnMonitoringPathAnalyzerTests#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#id DataOciVnMonitoringPathAnalyzerTests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#state DataOciVnMonitoringPathAnalyzerTests#state}.

---

### DataOciVnMonitoringPathAnalyzerTestsFilter <a name="DataOciVnMonitoringPathAnalyzerTestsFilter" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.Initializer"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

const dataOciVnMonitoringPathAnalyzerTestsFilter: dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#name DataOciVnMonitoringPathAnalyzerTests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#values DataOciVnMonitoringPathAnalyzerTests#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#regex DataOciVnMonitoringPathAnalyzerTests#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#name DataOciVnMonitoringPathAnalyzerTests#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#values DataOciVnMonitoringPathAnalyzerTests#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#regex DataOciVnMonitoringPathAnalyzerTests#regex}.

---

### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection.Initializer"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

const dataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection: dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection = { ... }
```


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems.Initializer"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

const dataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems: dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems = { ... }
```


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint.Initializer"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

const dataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint: dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint = { ... }
```


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters.Initializer"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

const dataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters: dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters = { ... }
```


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions.Initializer"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

const dataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions: dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions = { ... }
```


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint.Initializer"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

const dataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint: dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciVnMonitoringPathAnalyzerTestsFilterList <a name="DataOciVnMonitoringPathAnalyzerTestsFilterList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

new dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.get"></a>

```typescript
public get(index: number): DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter">DataOciVnMonitoringPathAnalyzerTestsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciVnMonitoringPathAnalyzerTestsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter">DataOciVnMonitoringPathAnalyzerTestsFilter</a>[]

---


### DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

new dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter">DataOciVnMonitoringPathAnalyzerTestsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciVnMonitoringPathAnalyzerTestsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter">DataOciVnMonitoringPathAnalyzerTestsFilter</a>

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

new dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.get"></a>

```typescript
public get(index: number): DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

new dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.listenerId">listenerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.networkLoadBalancerId">networkLoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.vlanId">vlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.vnicId">vnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

##### `networkLoadBalancerId`<sup>Required</sup> <a name="networkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.networkLoadBalancerId"></a>

```typescript
public readonly networkLoadBalancerId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.vlanId"></a>

```typescript
public readonly vlanId: string;
```

- *Type:* string

---

##### `vnicId`<sup>Required</sup> <a name="vnicId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.vnicId"></a>

```typescript
public readonly vnicId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint</a>

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

new dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

new dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.destinationEndpoint">destinationEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.protocol">protocol</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.protocolParameters">protocolParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.queryOptions">queryOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.sourceEndpoint">sourceEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `destinationEndpoint`<sup>Required</sup> <a name="destinationEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.destinationEndpoint"></a>

```typescript
public readonly destinationEndpoint: DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: number;
```

- *Type:* number

---

##### `protocolParameters`<sup>Required</sup> <a name="protocolParameters" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.protocolParameters"></a>

```typescript
public readonly protocolParameters: DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList</a>

---

##### `queryOptions`<sup>Required</sup> <a name="queryOptions" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.queryOptions"></a>

```typescript
public readonly queryOptions: DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList</a>

---

##### `sourceEndpoint`<sup>Required</sup> <a name="sourceEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.sourceEndpoint"></a>

```typescript
public readonly sourceEndpoint: DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems</a>

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

new dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.get"></a>

```typescript
public get(index: number): DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

new dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.destinationPort">destinationPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.icmpCode">icmpCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.icmpType">icmpType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.sourcePort">sourcePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationPort`<sup>Required</sup> <a name="destinationPort" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.destinationPort"></a>

```typescript
public readonly destinationPort: number;
```

- *Type:* number

---

##### `icmpCode`<sup>Required</sup> <a name="icmpCode" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.icmpCode"></a>

```typescript
public readonly icmpCode: number;
```

- *Type:* number

---

##### `icmpType`<sup>Required</sup> <a name="icmpType" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.icmpType"></a>

```typescript
public readonly icmpType: number;
```

- *Type:* number

---

##### `sourcePort`<sup>Required</sup> <a name="sourcePort" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.sourcePort"></a>

```typescript
public readonly sourcePort: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters</a>

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

new dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.get"></a>

```typescript
public get(index: number): DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

new dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.isBiDirectionalAnalysis">isBiDirectionalAnalysis</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isBiDirectionalAnalysis`<sup>Required</sup> <a name="isBiDirectionalAnalysis" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.isBiDirectionalAnalysis"></a>

```typescript
public readonly isBiDirectionalAnalysis: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions</a>

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

new dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.get"></a>

```typescript
public get(index: number): DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

new dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.listenerId">listenerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.networkLoadBalancerId">networkLoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.vlanId">vlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.vnicId">vnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

##### `networkLoadBalancerId`<sup>Required</sup> <a name="networkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.networkLoadBalancerId"></a>

```typescript
public readonly networkLoadBalancerId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.vlanId"></a>

```typescript
public readonly vlanId: string;
```

- *Type:* string

---

##### `vnicId`<sup>Required</sup> <a name="vnicId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.vnicId"></a>

```typescript
public readonly vnicId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint</a>

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

new dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.get"></a>

```typescript
public get(index: number): DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciVnMonitoringPathAnalyzerTests } from 'rhizo-co-terraform-provider-oci'

new dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection</a>

---



