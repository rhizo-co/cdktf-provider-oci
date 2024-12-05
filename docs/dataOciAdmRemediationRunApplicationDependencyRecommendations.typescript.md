# `dataOciAdmRemediationRunApplicationDependencyRecommendations` Submodule <a name="`dataOciAdmRemediationRunApplicationDependencyRecommendations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAdmRemediationRunApplicationDependencyRecommendations <a name="DataOciAdmRemediationRunApplicationDependencyRecommendations" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations oci_adm_remediation_run_application_dependency_recommendations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer"></a>

```typescript
import { dataOciAdmRemediationRunApplicationDependencyRecommendations } from 'rhizo-co-terraform-provider-oci'

new dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations(scope: Construct, id: string, config: DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig">DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig">DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetGav">resetGav</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetPurl">resetPurl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetGav` <a name="resetGav" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetGav"></a>

```typescript
public resetGav(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPurl` <a name="resetPurl" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetPurl"></a>

```typescript
public resetPurl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAdmRemediationRunApplicationDependencyRecommendations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isConstruct"></a>

```typescript
import { dataOciAdmRemediationRunApplicationDependencyRecommendations } from 'rhizo-co-terraform-provider-oci'

dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isTerraformElement"></a>

```typescript
import { dataOciAdmRemediationRunApplicationDependencyRecommendations } from 'rhizo-co-terraform-provider-oci'

dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isTerraformDataSource"></a>

```typescript
import { dataOciAdmRemediationRunApplicationDependencyRecommendations } from 'rhizo-co-terraform-provider-oci'

dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.generateConfigForImport"></a>

```typescript
import { dataOciAdmRemediationRunApplicationDependencyRecommendations } from 'rhizo-co-terraform-provider-oci'

dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciAdmRemediationRunApplicationDependencyRecommendations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAdmRemediationRunApplicationDependencyRecommendations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAdmRemediationRunApplicationDependencyRecommendations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAdmRemediationRunApplicationDependencyRecommendations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.applicationDependencyRecommendationCollection">applicationDependencyRecommendationCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList">DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.gavInput">gavInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.purlInput">purlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.remediationRunIdInput">remediationRunIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.gav">gav</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.purl">purl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.remediationRunId">remediationRunId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `applicationDependencyRecommendationCollection`<sup>Required</sup> <a name="applicationDependencyRecommendationCollection" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.applicationDependencyRecommendationCollection"></a>

```typescript
public readonly applicationDependencyRecommendationCollection: DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList">DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.filter"></a>

```typescript
public readonly filter: DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter</a>[]

---

##### `gavInput`<sup>Optional</sup> <a name="gavInput" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.gavInput"></a>

```typescript
public readonly gavInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `purlInput`<sup>Optional</sup> <a name="purlInput" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.purlInput"></a>

```typescript
public readonly purlInput: string;
```

- *Type:* string

---

##### `remediationRunIdInput`<sup>Optional</sup> <a name="remediationRunIdInput" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.remediationRunIdInput"></a>

```typescript
public readonly remediationRunIdInput: string;
```

- *Type:* string

---

##### `gav`<sup>Required</sup> <a name="gav" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.gav"></a>

```typescript
public readonly gav: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `purl`<sup>Required</sup> <a name="purl" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.purl"></a>

```typescript
public readonly purl: string;
```

- *Type:* string

---

##### `remediationRunId`<sup>Required</sup> <a name="remediationRunId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.remediationRunId"></a>

```typescript
public readonly remediationRunId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection.Initializer"></a>

```typescript
import { dataOciAdmRemediationRunApplicationDependencyRecommendations } from 'rhizo-co-terraform-provider-oci'

const dataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection: dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection = { ... }
```


### DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems.Initializer"></a>

```typescript
import { dataOciAdmRemediationRunApplicationDependencyRecommendations } from 'rhizo-co-terraform-provider-oci'

const dataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems: dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems = { ... }
```


### DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.Initializer"></a>

```typescript
import { dataOciAdmRemediationRunApplicationDependencyRecommendations } from 'rhizo-co-terraform-provider-oci'

const dataOciAdmRemediationRunApplicationDependencyRecommendationsConfig: dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.remediationRunId">remediationRunId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#remediation_run_id DataOciAdmRemediationRunApplicationDependencyRecommendations#remediation_run_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.gav">gav</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#gav DataOciAdmRemediationRunApplicationDependencyRecommendations#gav}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#id DataOciAdmRemediationRunApplicationDependencyRecommendations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.purl">purl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#purl DataOciAdmRemediationRunApplicationDependencyRecommendations#purl}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `remediationRunId`<sup>Required</sup> <a name="remediationRunId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.remediationRunId"></a>

```typescript
public readonly remediationRunId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#remediation_run_id DataOciAdmRemediationRunApplicationDependencyRecommendations#remediation_run_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#filter DataOciAdmRemediationRunApplicationDependencyRecommendations#filter}

---

##### `gav`<sup>Optional</sup> <a name="gav" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.gav"></a>

```typescript
public readonly gav: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#gav DataOciAdmRemediationRunApplicationDependencyRecommendations#gav}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#id DataOciAdmRemediationRunApplicationDependencyRecommendations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `purl`<sup>Optional</sup> <a name="purl" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.purl"></a>

```typescript
public readonly purl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#purl DataOciAdmRemediationRunApplicationDependencyRecommendations#purl}.

---

### DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter.Initializer"></a>

```typescript
import { dataOciAdmRemediationRunApplicationDependencyRecommendations } from 'rhizo-co-terraform-provider-oci'

const dataOciAdmRemediationRunApplicationDependencyRecommendationsFilter: dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#name DataOciAdmRemediationRunApplicationDependencyRecommendations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#values DataOciAdmRemediationRunApplicationDependencyRecommendations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#regex DataOciAdmRemediationRunApplicationDependencyRecommendations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#name DataOciAdmRemediationRunApplicationDependencyRecommendations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#values DataOciAdmRemediationRunApplicationDependencyRecommendations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#regex DataOciAdmRemediationRunApplicationDependencyRecommendations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.Initializer"></a>

```typescript
import { dataOciAdmRemediationRunApplicationDependencyRecommendations } from 'rhizo-co-terraform-provider-oci'

new dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciAdmRemediationRunApplicationDependencyRecommendations } from 'rhizo-co-terraform-provider-oci'

new dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.applicationDependencyNodeIds">applicationDependencyNodeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.gav">gav</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.nodeId">nodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.purl">purl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.recommendedGav">recommendedGav</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.recommendedPurl">recommendedPurl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems">DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationDependencyNodeIds`<sup>Required</sup> <a name="applicationDependencyNodeIds" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.applicationDependencyNodeIds"></a>

```typescript
public readonly applicationDependencyNodeIds: string[];
```

- *Type:* string[]

---

##### `gav`<sup>Required</sup> <a name="gav" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.gav"></a>

```typescript
public readonly gav: string;
```

- *Type:* string

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

---

##### `purl`<sup>Required</sup> <a name="purl" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.purl"></a>

```typescript
public readonly purl: string;
```

- *Type:* string

---

##### `recommendedGav`<sup>Required</sup> <a name="recommendedGav" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.recommendedGav"></a>

```typescript
public readonly recommendedGav: string;
```

- *Type:* string

---

##### `recommendedPurl`<sup>Required</sup> <a name="recommendedPurl" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.recommendedPurl"></a>

```typescript
public readonly recommendedPurl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems">DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems</a>

---


### DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.Initializer"></a>

```typescript
import { dataOciAdmRemediationRunApplicationDependencyRecommendations } from 'rhizo-co-terraform-provider-oci'

new dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.get"></a>

```typescript
public get(index: number): DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciAdmRemediationRunApplicationDependencyRecommendations } from 'rhizo-co-terraform-provider-oci'

new dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList">DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection">DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList">DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection">DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection</a>

---


### DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.Initializer"></a>

```typescript
import { dataOciAdmRemediationRunApplicationDependencyRecommendations } from 'rhizo-co-terraform-provider-oci'

new dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.get"></a>

```typescript
public get(index: number): DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter</a>[]

---


### DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciAdmRemediationRunApplicationDependencyRecommendations } from 'rhizo-co-terraform-provider-oci'

new dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter</a>

---



